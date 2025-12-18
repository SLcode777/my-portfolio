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

interface EmailConfirmationProps {
  name: string;
  message: string;
}

export function EmailConfirmation({ name, message }: EmailConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Confirmation de votre message - Stella</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Bonjour {name} ! 👋</Heading>
          <Text style={text}>
            J&apos;ai bien reçu votre message. Je vous remercie de m&apos;avoir
            contactée, je reviens vers vous très vite !
          </Text>
          <Text style={text}>Bien cordialement,</Text>
          <Text style={signature}>Stella 💫</Text>
          <Hr style={hr} />
          <Heading as="h2" style={h2}>
            Rappel du contenu de votre message :
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

const signature = {
  color: "#333",
  fontSize: "14px",
  margin: "0",
  fontWeight: "500" as const,
};

const messageText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  backgroundColor: "#f4f4f4",
  padding: "16px",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
