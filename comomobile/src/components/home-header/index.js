import React from "react";

import { HeaderlighthomeHeader, TitleText } from "../atoms";
import Row from "../atoms/row";

export default function HomeHeader() {
  return (
    <>
      <HeaderlighthomeHeader>
        <Row
          customStyles={{
            justifyContent: 'center',
            paddingVertical: 10,
          }}
        >
          <TitleText>Scan & GO</TitleText>
        </Row>
      </HeaderlighthomeHeader>
    </>
  );
}
