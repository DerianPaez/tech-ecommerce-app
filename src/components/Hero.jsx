import { Button, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";

export default function Hero({
  background,
  title,
  image,
  minHeight = "500px",
  fullHeight,
  imgContain,
}) {
  return (
    <Container
      as="section"
      fluid
      display="flex"
      alignItems="center"
      css={{
        padding: "$15 $0",
        minHeight: fullHeight ? "calc(100vh - 82px)" : minHeight,
        "@xs": { minHeight: fullHeight ? "calc(100vh - 88px)" : minHeight },
        position: "relative",
      }}
    >
      <Image
        fill
        src={background}
        alt="Default Image"
        style={{
          position: "absolute",
          top: 0,
          left: "-350px",
          bottom: 0,
          right: 0,
          height: "100%",
          width: "100%",
        }}
      />
      <Grid.Container
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        css={{
          display: "grid",
          gap: "$6",
          "@md": { gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr" },
        }}
      >
        <Grid direction="column" css={{ display: "flex", gap: "$6" }}>
          <Text
            h1
            css={{
              textGradient: "45deg, #c6deff, #516cec",
            }}
          >
            {title}
          </Text>
          <Button
            color="gradient"
            auto
            css={{
              width: "max-content",
            }}
          >
            Comprar
          </Button>
        </Grid>
        <Grid
          css={{ height: "100%", position: "relative", minHeight: "450px" }}
        >
          <Image
            fill
            src="https://cdn.discordapp.com/attachments/402596575928385537/1125956989957181440/ceramic_deep_purple__fhc53fxovp2e_large_2x.png"
            alt="Default Image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              objectFit: imgContain ? "contain" : "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
