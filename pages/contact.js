import Layout from "../components/Layout";
import styled from "styled-components";
import { useForm } from "react-hook-form";

let Form = styled.form`
  display: grid;
  gap: 20px;
`;
const Input = styled.input`
  border: none;
  padding: 8px;
  border-radius: 10px;
  transition: outline 0.1s;

  &:focus {
    border: none;
    outline: 3px solid rgba(0, 180, 216, 0.5);
  }
`;

const Select = styled.select`
  border: none;
  padding: 8px;
  border-radius: 10px;
  transition: outline 0.1s;

  &:focus {
    border: none;
    outline: 3px solid rgba(0, 180, 216, 0.5);
  }
`;

const Error = styled.span`
  color: tomato;
`;
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const gonder = (data) => {
    console.log("form gönderiliyor");
    console.log(data);
  };

  return (
    <div>
      <Layout title="İletişim">
        <Form onSubmit={handleSubmit(gonder)}>
          <label htmlFor="name">First name:</label>
          <Input
            {...register("firstName", { required: true })}
            type="text"
            id="name"
            name="firstName"
          />
          {errors.firstName && <Error>İsim Girmek Zorunludur.</Error>}
          <label htmlFor="sname">Last name:</label>
          <Input
            {...register("surname")}
            type="text"
            id="sname"
            name="surname"
          />
          <label htmlFor="cars">Choose a car:</label>
          <Select {...register("Car")} id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </Select>
          <Input type="submit" id="submit" />
        </Form>
      </Layout>
    </div>
  );
}
