import { CustomInput } from "../ui/CustomImput";
export function LoginForm() {
  return (
    <form action="">
      <label>
        <p>Ingresa tu email</p>
        <CustomInput name="myInput" type="text" />
        <CustomInput name="anotherInput" type="text" placeholder="Enter text" />
        <CustomInput name="thirdInput" type="text" value="Initial value" />
      </label>
    </form>
  );
}
