import React from "react";

import { HeaderlighthomeHeader, TitleText } from "../atoms";
import Row from "../atoms/row";
import styles from "./styles";

export default function HomeHeader({ label }) {
  return (
    <>
      <HeaderlighthomeHeader>
        <Row customStyles={styles.wrapper}>
          <TitleText>{label}</TitleText>
        </Row>
      </HeaderlighthomeHeader>
    </>
  );
}
