import { Fragment } from "react";
import { MainLayout } from "../../components/MainLayout";
import { existingMatrix } from "./data";
import { useEffect, useState } from "react";
import styled from "styled-components";
// Todo составить строгую матрицу сначала, затем мапить массив и заполнять матрицу
const _existingMatrix = {
  AUD: {
    AUD: null,
    CAD: {
      change_1d: -0.005,
      is_opposite: false,
      price: 0.9158,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:AUD_CAD",
    },
    EUR: {
      change_1d: -0.004,
      is_opposite: true,
      price: 0.6186,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_AUD",
    },
    CHF: {
      change_1d: -0.005,
      is_opposite: false,
      price: 0.6649,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:AUD_CHF",
    },
    GBP: {
      change_1d: -0.002,
      is_opposite: true,
      price: 0.5279,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:GBP_AUD",
    },
    NZD: {
      change_1d: -0.003,
      is_opposite: false,
      price: 1.0525,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:AUD_NZD",
    },
    JPY: {
      change_1d: -0.415,
      is_opposite: false,
      price: 80.56,
      primary_country: "Australia",
      primary_currency: "AUD",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:AUD_JPY",
    },
  },
  CAD: {
    AUD: {
      change_1d: 0.005,
      is_opposite: true,
      price: 1.0913,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:AUD_CAD",
    },
    CAD: null,
    EUR: {
      change_1d: -0.001,
      is_opposite: true,
      price: 0.6753,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_CAD",
    },
    CHF: {
      change_1d: -0.002,
      is_opposite: false,
      price: 0.7258,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:CAD_CHF",
    },
    GBP: {
      change_1d: 0.001,
      is_opposite: true,
      price: 0.5762,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:GBP_CAD",
    },
    NZD: {
      change_1d: 0.003,
      is_opposite: true,
      price: 1.1488,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:NZD_CAD",
    },
    JPY: {
      change_1d: -0.025,
      is_opposite: false,
      price: 87.94,
      primary_country: "Canada",
      primary_currency: "CAD",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:CAD_JPY",
    },
  },
  EUR: {
    AUD: {
      change_1d: 0.008,
      is_opposite: false,
      price: 1.6158,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:EUR_AUD",
    },
    CAD: {
      change_1d: 0.001,
      is_opposite: false,
      price: 1.4802,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:EUR_CAD",
    },
    EUR: null,
    CHF: {
      change_1d: -0.002,
      is_opposite: false,
      price: 1.0747,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:EUR_CHF",
    },
    GBP: {
      change_1d: 0.002,
      is_opposite: false,
      price: 0.8532,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:EUR_GBP",
    },
    NZD: {
      change_1d: 0.005,
      is_opposite: false,
      price: 1.7011,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:EUR_NZD",
    },
    JPY: {
      change_1d: 0.05,
      is_opposite: false,
      price: 130.21,
      primary_country: "Europe",
      primary_currency: "EUR",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:EUR_JPY",
    },
  },
  CHF: {
    AUD: {
      change_1d: 0.011,
      is_opposite: true,
      price: 1.5029,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:AUD_CHF",
    },
    CAD: {
      change_1d: 0.003,
      is_opposite: true,
      price: 1.3767,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:CAD_CHF",
    },
    EUR: {
      change_1d: 0.002,
      is_opposite: true,
      price: 0.9299,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_CHF",
    },
    CHF: null,
    GBP: {
      change_1d: 0.003,
      is_opposite: true,
      price: 0.7936,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:GBP_CHF",
    },
    NZD: {
      change_1d: 0.008,
      is_opposite: true,
      price: 1.5821,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:NZD_CHF",
    },
    JPY: {
      change_1d: 0.3,
      is_opposite: false,
      price: 121.11,
      primary_country: "Switzerland",
      primary_currency: "CHF",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:CHF_JPY",
    },
  },
  GBP: {
    AUD: {
      change_1d: 0.005,
      is_opposite: false,
      price: 1.8931,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:GBP_AUD",
    },
    CAD: {
      change_1d: -0.004,
      is_opposite: false,
      price: 1.7342,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:GBP_CAD",
    },
    EUR: {
      change_1d: -0.003,
      is_opposite: true,
      price: 1.1714,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_GBP",
    },
    CHF: {
      change_1d: -0.006,
      is_opposite: false,
      price: 1.2591,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:GBP_CHF",
    },
    GBP: null,
    NZD: {
      change_1d: 0.001,
      is_opposite: false,
      price: 1.993,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:GBP_NZD",
    },
    JPY: {
      change_1d: -0.3,
      is_opposite: false,
      price: 152.56,
      primary_country: "United Kingdom",
      primary_currency: "GBP",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:GBP_JPY",
    },
  },
  NZD: {
    AUD: {
      change_1d: 0.002,
      is_opposite: true,
      price: 0.9494,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:AUD_NZD",
    },
    CAD: {
      change_1d: -0.003,
      is_opposite: false,
      price: 0.8697,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:NZD_CAD",
    },
    EUR: {
      change_1d: -0.002,
      is_opposite: true,
      price: 0.5874,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_NZD",
    },
    CHF: {
      change_1d: -0.004,
      is_opposite: false,
      price: 0.6314,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:NZD_CHF",
    },
    GBP: {
      change_1d: -0.001,
      is_opposite: true,
      price: 0.5013,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:GBP_NZD",
    },
    NZD: null,
    JPY: {
      change_1d: -0.25,
      is_opposite: false,
      price: 76.5,
      primary_country: "New Zealand",
      primary_currency: "NZD",
      secondary_country: "Japan",
      secondary_currency: "JPY",
      ws_ticker: "OANDA:NZD_JPY",
    },
  },
  JPY: {
    AUD: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0124,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "Australia",
      secondary_currency: "AUD",
      ws_ticker: "OANDA:AUD_JPY",
    },
    CAD: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0114,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "Canada",
      secondary_currency: "CAD",
      ws_ticker: "OANDA:CAD_JPY",
    },
    EUR: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0077,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "Europe",
      secondary_currency: "EUR",
      ws_ticker: "OANDA:EUR_JPY",
    },
    CHF: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0083,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "Switzerland",
      secondary_currency: "CHF",
      ws_ticker: "OANDA:CHF_JPY",
    },
    GBP: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0066,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "United Kingdom",
      secondary_currency: "GBP",
      ws_ticker: "OANDA:GBP_JPY",
    },
    NZD: {
      change_1d: 0,
      is_opposite: true,
      price: 0.0131,
      primary_country: "Japan",
      primary_currency: "JPY",
      secondary_country: "New Zealand",
      secondary_currency: "NZD",
      ws_ticker: "OANDA:NZD_JPY",
    },
    JPY: null,
  },
};

type primary_currency = "AUD" | "CAD" | "EUR" | "CHF" | "GBP" | "NZD" | "JPY";

const replace: {
  change_1d: number;
  is_opposite: boolean;
  price: number;
  primary_country: string;
  primary_currency: primary_currency;
  secondary_country: string;
  secondary_currency: string;
  ws_ticker: string;
} = {
  change_1d: -0.415,
  is_opposite: false,
  price: 111.1121211,
  primary_country: "Australia",
  primary_currency: "AUD",
  secondary_country: "Japan",
  secondary_currency: "JPY",
  ws_ticker: "OANDA:AUD_JPY",
};

const _replace = {
  ..._existingMatrix,
  [replace.primary_currency]: {
    ..._existingMatrix[replace.primary_currency],
    [replace.secondary_currency]: replace,
  },
};

export default function ForexMatrix() {
  const [matrix, setMatrix] = useState(null);

  const convertToMatrix = (cells) => {
    return cells
      .sort((prev, next) => {
        if (
          prev.primary_currency === next.primary_currency &&
          prev.secondary_currency < next.secondary_currency
        )
          return -1;
      })
      .reduce((prev, cur) => {
        prev[cur.primary_currency] = {
          ...prev[cur.primary_currency],
          [cur.secondary_currency]: cur,
        };
        return prev;
      }, {});
  };

  useEffect(() => {
    setMatrix(convertToMatrix(existingMatrix.cells));
  }, []);

  return (
    <MainLayout>
      {matrix && (
        <ForexTable cols={Object.keys(matrix).length + 1}>
          <TTopCurrencyBar>
            {matrix &&
              Object.keys(matrix).map((currency) => (
                <Col key={currency}>{currency}</Col>
              ))}
          </TTopCurrencyBar>
          <TLeftCurrencyBar>
            <Col>+</Col>
            {matrix &&
              Object.keys(matrix).map((currency) => (
                <Col key={currency}>{currency}</Col>
              ))}
          </TLeftCurrencyBar>
          <TBody>
            {Object.values(matrix).map((row, rowIndex, rowArr) => {
              return (
                <Row key={rowIndex}>
                  {Object.values(row).map((col, colIndex, colArr) => {
                    if (rowIndex === colIndex) {
                      return (
                        <Fragment key={col.price}>
                          <Col>empty</Col>
                          <Col>{col.price}</Col>
                        </Fragment>
                      );
                    }
                    if (!rowArr[rowIndex + 1] && !colArr[colIndex + 1]) {
                      return (
                        <Fragment key={col.price}>
                          <Col>{col.price}</Col>
                          <Col>empty</Col>
                        </Fragment>
                      );
                    }
                    return <Col key={col.price}>{col.price}</Col>;
                  })}
                </Row>
              );
            })}
          </TBody>
        </ForexTable>
      )}
    </MainLayout>
  );
}

const ForexTable = styled.div<{ cols: number }>`
  color: white;
  display: grid;
  grid-template-areas:
    "leftBar topBar"
    "leftBar table";
  grid-template-columns: ${({ cols }) => cols && `calc(100% / ${cols})`};
`;
const TTopCurrencyBar = styled.div`
  display: flex;
  grid-area: topBar;
`;
const TLeftCurrencyBar = styled.div`
  grid-area: leftBar;
`;
const TBody = styled.div`
  grid-area: table;
`;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 1px solid white;
`;
