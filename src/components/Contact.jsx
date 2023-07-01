import styles from "../style";
import { useForm, Controller } from "react-hook-form";
import FormElement from "./FormElement";

export default function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`md:flex-row flex-col  w-full`}>
        <div className="rounded-lg shadow-lg bg-slate-800 -mt-20 py-10 md:py-12 px-4 md:px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="text"
                  label="Name"
                  placeholder="Enter name here ..."
                  fieldRef={field}
                  hasError={errors.name?.type === "required"}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="email"
                  label="Email"
                  placeholder="Enter email here ..."
                  fieldRef={field}
                  hasError={errors.email?.type === "required"}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="textarea"
                  label="Message"
                  placeholder="Enter name here ..."
                  fieldRef={field}
                  hasError={errors.message?.type === "required"}
                />
              )}
            />
          </form>
          <button
            type="submit"
            className="w-auto rounded-lg px-6 py-3 bg-slate-400 shadow-md hover:shadow-lg"
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ {new Date().getFullYear()} Léo Chastagnac
        </p>
      </div>
    </section>
  );
}
