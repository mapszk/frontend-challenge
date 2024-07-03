interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h4>From: {name}</h4>
      <h4>Email: {email}</h4>
      <p>{message}</p>
    </div>
  );
}
