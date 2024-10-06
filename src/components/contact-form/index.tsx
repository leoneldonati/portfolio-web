import { IconMailFast } from "@tabler/icons-react";
import "./index.css";

export default function ContactForm() {
  return (
    <form className="md:max-w-full max-w-[400px] mx-auto">
      <div>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa tu nombre..."
            required
            autoFocus
            
          />

        </label>
        <label
          htmlFor="email"
          
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu email..."
            required
            
          />
        </label>
        <label
          htmlFor="content"
          className="h-full"
          
        >
          <textarea
            className="resize-none h-full"
            name="content"
            id="content"
            placeholder="Puedes dejarme un mensaje si quieres..."
            
          ></textarea>

        </label>
      </div>

      <button
        type="submit"
        className="flex flex-row items-center bg-yellow-300/75 rounded-md shadow-md shadow-yellow-500/45 gap-1 p-2 transition hover:scale-105"
      >
        <IconMailFast />
        <strong> Enviar </strong>
      </button>
    </form>
  );
}
