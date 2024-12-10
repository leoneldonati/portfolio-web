import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

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
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSending(false);
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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] h-full w-full flex-1 flex flex-col gap-6 [&>label]:w-full [&>label>*]:w-full [&>label>*]:rounded [&>label>*]:p-2 [&>label>*]:bg-transparent [&>label>*]:backdrop-blur-md [&>label>*]:outline [&>label>*]:outline-white/60 text-white [&>label>*]:border-none"
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
        className={`px-4 py-2 rounded-md outline outline-sky-500/75 transition hover:bg-sky-300 hover:text-black  ${sending ? "pointer-events-none" : "pointer-events-auto"} ${sending ? "scale-95" : "scale-100"}`}
        title="Enviar el mensaje"
      >
        <strong>{sending ? "Enviando" : "Enviar"}</strong>
      </button>
    </form>
  );
}
