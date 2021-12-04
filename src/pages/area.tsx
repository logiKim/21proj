import React, { useEffect, useMemo, useState } from "react";
import Korea, { DistLevel } from "../components/Korea";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import areaData from "../test/AREA.json";
import AreaDetailGraph from "../components/AreaDetailGraph";
import { Button, DatePicker } from "antd";
import moment from "moment";
import axios from "axios";

const StyleArea = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  .chart {
    margin-top: 50px;

    p {
      text-align: center;
    }
  }
  .area_num {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .district {
    display: flex;
    flex-wrap: wrap;

    user-select: none;
    width: 100%;
  }
  .box {
    margin: 10px;
    width: 80px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
`;
const dateFormat = "YYYY-MM-DD";
function AreaPage() {
  const [rangeDate, setRangeDate] = useState({
    start: moment().format(dateFormat) as any,
    end: moment().format(dateFormat) as any,
  });
  const [area, setArea] = useState("");
  const [areaData, setAreaData] = useState<any>([]);
  const [findData, setFindData] = useState<any>(null);

  const [districtData, setDistrictData] = useState<any>(null);

  useEffect(() => {
    const fetch = async () => {
      if (area === "") return;
      const response = await axios.get(
        "http://localhost:3001/covid/covidInfos/district",
        {
          params: {
            start_date: rangeDate.start,
            end_date: rangeDate.end,
            area,
          },
        }
      );
      setDistrictData(response.data);
    };
    fetch();
  }, [areaData, area]);

  useEffect(() => {
    if ((areaData?.data?.length ?? 0) > 0 && area != "")
      setFindData(areaData.data.find((v: any) => v.area_name == area));
  }, [areaData, area]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3001/covid/covidInfos",
        {
          params: {
            start_date: rangeDate.start,
            end_date: rangeDate.end,
          },
        }
      );
      setAreaData(response.data);
    };
    fetch();
  }, [rangeDate]);

  return (
    <div>
      {/* <label>
        <input type="radio" name="date" value="daily" />
        일별 데이터
      </label>
      <label>
        <input type="radio" name="date" value="summary" />
        일별 종합 데이터
      </label> */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {/* <DatePicker
          onChange={(e) => e && setDate(e.format(dateFormat))}
          defaultValue={moment("2021-11-14", dateFormat)}
          format={dateFormat}
        /> */}
        <DatePicker.RangePicker
          ranges={{
            Today: [
              moment("2021-11-14", dateFormat),
              moment("2021-11-14", dateFormat),
            ],
          }}
          onChange={(e) =>
            e &&
            setRangeDate({
              start: e[0]?.format(dateFormat),
              end: e[1]?.format(dateFormat),
            })
          }
        />
      </div>
      <StyleArea className="box">
        <div className="map">
          <DistLevel onAreaClick={setArea} top={15} />
          <Korea onAreaClick={setArea} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {area === "" ? (
            <div className="chart">
              <BarChart
                width={800}
                height={450}
                data={areaData.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="area_confirmed" fill="#d88484" />
                <Bar dataKey="area_isolated" fill="#8884d8" />
                <Bar dataKey="area_deseased" fill="#4b4b4b" />
                <Bar dataKey="area_recovered" fill="#82ca9d" />
                <Bar dataKey="area_dist_level" fill="#898dff" />
              </BarChart>
              <p>지역별 전일 대비 그래프</p>
            </div>
          ) : (
            <div style={{ marginTop: "30px" }}>
              <div
                style={{
                  display: "grid",
                  gridGap: "40px",
                  gridTemplateColumns: "300px 0.9fr",
                }}
              >
                <div
                  className="box"
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    userSelect: "none",
                  }}
                >
                  <h2 style={{ fontWeight: "bold" }}>
                    {area} 전일 대비 데이터
                  </h2>
                  <div className="area_num">
                    확진자 수 : {findData?.area_confirmed}명
                  </div>
                  <div className="area_num">
                    거리두기 : {findData?.area_dist_level}단계
                  </div>

                  <div className="area_num">
                    격리자 수 : {findData?.area_recovered}명
                  </div>

                  <div className="area_num">
                    완치자 수 : {findData?.area_recovered}명
                  </div>

                  <div className="area_num">
                    사망자 수 : {findData?.area_deseased}명
                  </div>
                  <div>
                    <BarChart
                      width={250}
                      height={150}
                      data={
                        findData
                          ? Object.entries(findData)
                              .filter(
                                (v) =>
                                  v[0] !== "update_date" &&
                                  v[0] !== "area_name" &&
                                  v[0] !== "area_dist_level"
                              )
                              .map((v) => {
                                let name = v[0];
                                if (name === "area_confirmed") name = "확진자";
                                if (name === "area_isolated") name = "격리자";
                                if (name === "area_deseased") name = "사망자";
                                if (name === "area_recovered") name = "완치자";
                                return {
                                  name,
                                  value: v[1],
                                };
                              })
                          : []
                      }
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#d88484" />
                    </BarChart>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    paddingBottom: "10px",
                  }}
                >
                  <h2 style={{ fontWeight: "bold", marginTop: "10px" }}>
                    자치구별 확진자 수
                  </h2>
                  <div className="district">
                    {districtData?.data?.map((v: any, idx: number) => (
                      <div className="box district_item">
                        <p
                          style={{
                            fontWeight: "bold",
                            marginTop: "5px",
                            marginBottom: "0px",
                          }}
                        >
                          {v.district}
                        </p>
                        <p
                          style={{ paddingBottom: "3px", marginBottom: "5px" }}
                        >
                          {v.district_confirmed}명
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="chart">
                <BarChart
                  width={800}
                  height={250}
                  data={Object.entries(transAreaData[area])
                    .filter(
                      (v) =>
                        v[0] !== "DATE" &&
                        v[0] !== "NAME" &&
                        v[0] !== "DIST_LEVEL"
                    )
                    .map((v) => {
                      let name = v[0];
                      if (name === "CONFIRMED") name = "확진자";
                      if (name === "ISOLATED") name = "격리자";
                      if (name === "DESEASED") name = "사망자";
                      if (name === "RECOVERED") name = "완치자";
                      return {
                        name,
                        value: v[1],
                      };
                    })}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#d88484" />
                </BarChart>
                <p>그래프</p>
              </div> */}
              <Button
                style={{ width: "100%", marginTop: "20px" }}
                onClick={() => setArea("")}
              >
                이전 그래프로
              </Button>
            </div>
          )}
        </div>
      </StyleArea>
    </div>
  );
}

export default AreaPage;
