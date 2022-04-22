import { styled } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import Header from "./Header";
import TabsIndicatorCenter from "./TabsIndicatorCenter";
import demoImage from "../image/demo.png";
import avatarImage from "../image/avatar.png";
import backgroundImage from "../image/background.png";

import { Card } from "@material-ui/core";
import UploadButtons from "./UploadButtons";

const PageBackgroundWrapper = styled("div")(
  () => ({
    backgroundImage: `url(${backgroundImage})`,
    height: "auto",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }),
  { name: "PageBackgroundWrapper" }
);

/* nền có nhiều vòng tròn */
export default function PageBackground() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const tabs = [
    {
      label: "Giới thiệu",
      content: (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6">
              <b>
                XÂY DỰNG HỆ THỐNG NHẬN DẠNG CÁC LOẠI TRÁI CÂY TRONG KHÂU NHẬP
                XUẤT, KIỂM ĐẾM
              </b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Nông nghiệp là rất quan trọng và cần thiết cho con người vì họ
              trực tiếp phụ thuộc vào nó để sản xuất lương thực. Đặc biệt, các
              loại trái cây thường được mua bởi từng hộ gia đình và giàu chất
              dinh dưỡng; do đó, đòi hỏi một nguồn cung cấp và sản xuất liên tục
              để đáp ứng nhu cầu của dân số thế giới ngày càng tăng. Vì lý do
              này, toàn bộ chuỗi ngành nông sản thực phẩm phải trải qua những
              thách thức ngày càng tăng, đòi hỏi phải áp dụng các công nghệ tiên
              tiến mới để nâng cao năng suất của nó. Trong số các ứng dụng khác,
              công nghệ tính toán đã được áp dụng cho các nhiệm vụ nhận dạng
              trái cây và phát hiện hiệu quả các khuyết tật cụ thể của nó, ở cả
              thị trường bán buôn và bán lẻ.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src={demoImage}
              alt=""
              width="80%"
              style={{ paddingBottom: "24px", borderBottom: "3px solid black" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <img src={avatarImage} alt="" width="100%" />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Typography align="left">TRAN THI TU LINH</Typography>
                    <Typography align="left">45.01.104.127</Typography>
                    <Typography align="left">K45.CNTT.B</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <img src={avatarImage} alt="" width="100%" />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Typography align="left">TRAN THI TU LINH</Typography>
                    <Typography align="left">45.01.104.145</Typography>
                    <Typography align="left">K45.CNTT.C</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Demo",
      content: (
        <Container>
          <Card
            variant="outlined"
            style={{
              border: "3px dashed #F9D9E6",
              height: "45vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <UploadButtons
              setPreview={setPreview}
              setSelectedFile={setSelectedFile}
              selectedFile={selectedFile}
            />
          </Card>
          {selectedFile && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={preview} width="100%" height="auto" alt="" />
              </Grid>
            </Grid>
          )}
        </Container>
      ),
    },
  ];

  return (
    <PageBackgroundWrapper>
      <Header />
      <CardContent>
        <Typography
          align="center"
          variant="h4"
          style={{ fontFamily: "Ms Madi, cursive" }}
        >
          KHÓA LUẬN
        </Typography>
        <TabsIndicatorCenter tabs={tabs} />
      </CardContent>
    </PageBackgroundWrapper>
  );
}
