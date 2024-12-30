import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  status: number;
  text: string;
};
const StatusCard = (props: Props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`fixed top-20 left-0 right-0 m-auto z-20 max-w-[350px] border-3 rounded p-4 transition  ${props.status > 399 ? "bg-red-300" : "bg-white/30"} backdrop-blur-sm ${props.status > 399 ? "border-red-500" : "border-white"} grid place-items-center text-small aspect-video overflow-clip`}
      style={{
        transform: `translateY(${visible ? 0 : -20}%)`,
        opacity: visible ? "1" : "0",
      }}
    >
      {props.status > 399 && (
        <span className="text-4xl text-red-600">
          <strong>{props.status}</strong>
        </span>
      )}
      <p className="max-w-[40ch] text-xl">{props.text}</p>
    </div>
  );
};

export default function EmailForm() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState<Props | null>(null);
  const [succes, setSuccess] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);

    emailjs
      .send(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        info,
        {
          publicKey: import.meta.env.PUBLIC_KEY,
        }
      )
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError({
          status: err.status,
          text: err.text,
        });
      })
      .finally(() => {
        setSending(false);
        setInfo({ name: "", email: "", msg: "" });
      });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [error]);
  return (
    <div className="max-w-[400px] w-full">
      <form
        onSubmit={handleSubmit}
        className=" h-full w-full flex-1 flex flex-col gap-6 [&>label]:w-full [&>label>*]:w-full [&>label>*]:rounded [&>label>*]:p-2 [&>label>*]:bg-primary/40 [&>label>*::placeholder]:text-white/70  [&>label>*]:backdrop-blur-md [&>label>*]:outline [&>label>*]:outline-white/60 text-white [&>label>*]:border-none"
      >
        <label htmlFor="name">
          <strong>Tu nombre</strong>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jhon"
            required
            onChange={handleChange}
            value={info.name}
          />
        </label>
        <label htmlFor="email">
          <strong>Tu email</strong>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jhon@example.com"
            required
            onChange={handleChange}
            value={info.email}
          />
        </label>
        <label htmlFor="msg">
          <strong>Hazme saber tu problema</strong>
          <textarea
            name="msg"
            id="msg"
            className="resize-none flex flex-1 h-32"
            required
            onChange={handleChange}
            value={info.msg}
            placeholder="¡Me gustaría contratar sus servicios!"
          ></textarea>
        </label>

        <button
          type="submit"
          className={`px-4 py-2 flex flex-row justify-center gap-2 rounded-md outline outline-primary/75 transition hover:bg-primary/40  ${sending ? "pointer-events-none" : "pointer-events-auto"} ${sending ? "scale-95" : "scale-100"}`}
          title="Enviar el mensaje"
        >
          <strong>{sending ? "Enviando" : "Enviar"}</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </form>

      {error && !sending && (
        <StatusCard text={error.text} status={error.status} />
      )}
      {!error && succes && (
        <StatusCard
          text="¡Gracias por comunicarte conmigo! Estaré contactándome a la brevedad."
          status={200}
        />
      )}
    </div>
  );
}
