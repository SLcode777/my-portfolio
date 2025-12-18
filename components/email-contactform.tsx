import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export function EmailContactForm({ name, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de contact de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle demande de contact</Heading>
          <Text style={text}>
            <strong>De :</strong> {name}
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={h2}>
            Message :
          </Heading>
          <Text style={messageText}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const h2 = {
  color: "#666",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0",
};

const text = {
  color: "#333",
  fontSize: "14px",
  margin: "24px 0",
};

const messageText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
