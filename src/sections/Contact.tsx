import styles from "./styles/Contact.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
const Contact = () => {
  type ContactFormInputs = {
    name: string;
    mail: string;
    message: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const handleSubmitForm: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log(data);
  };
  return (
    <section id="Contact" className={styles.Contact}>
      <h2>Contato</h2>
      <form className="Container"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className={styles.FormFieldInput}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome"
              {...register("name", {
                required: "Campo obrigatório",
              })}
            />
            {errors.name && <p>{errors.name.message as string}</p>}
          </div>

          <div>
            <input
              type="email"
              id="mail"
              placeholder="Seu e-mail"
              {...register("mail", {
                required: "Campo obrigatório",
              })}
            />
            {errors.mail && <p>{errors.mail.message as string}</p>}
          </div>
        </div>
        <div className={styles.FormFieldText}>
          <textarea
            id="message"
            placeholder="Sua mensagem"
            {...register("message", {
              required: "Campo obrigatório",
            })}
          ></textarea>
          {errors.message && <p>{errors.message.message as string}</p>}
        </div>

        <button type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
};
export { Contact };
