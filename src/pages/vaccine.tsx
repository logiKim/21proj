import { Calendar, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { dateFormat, todayStr } from "../App";

const StyleVaccine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .chart {
    margin-top: 20px;
  }
  p {
    font-size: 1.4rem;
  }
  text-align: center;
`;

function VaccinePage() {
  const [rangeDate, setRangeDate] = useState({
    start: todayStr as any,
    end: todayStr as any,
  });
  const [vaccineData, setVaccineData] = useState<any>({
    range: false,
    data: [],
  });

  useEffect(() => {
    console.log("AA", vaccineData);
  }, [vaccineData]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/covid/vaccInfos", {
        params: {
          start_date: rangeDate.start,
          end_date: rangeDate.end,
        },
      });
      setVaccineData({
        range: response.data.range,
        data: response.data.data.map((v: any) => {
          Object.keys(v).forEach((f) => {
            if (v[f] == null) v[f] = 0;
          });
          return v;
        }),
      });
    };
    fetch();
  }, [rangeDate]);
  return (
    <StyleVaccine>
      <div
        className="chart box"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <AreaChart
          width={1100}
          height={450}
          data={vaccineData.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="vacc_name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={"vacc_once"}
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey={"vacc_fully"}
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey={"vacc_boost"}
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
        <p>백신별 {vaccineData.range ? "날짜 평균" : ""} 데이터</p>
        <DatePicker.RangePicker
          value={[
            moment(rangeDate.start, dateFormat),
            moment(rangeDate.end, dateFormat),
          ]}
          ranges={{
            Today: [moment(todayStr, dateFormat), moment(todayStr, dateFormat)],
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
    </StyleVaccine>
  );
}

export default VaccinePage;
