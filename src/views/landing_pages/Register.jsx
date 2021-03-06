import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
    let expEmail =
        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const history = useHistory();
    const [nameState, setNameState] = useState("");
    const [lastnameState, setLastnameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const [pass2State, setPass2State] = useState("");
    const [typeName, setTypeName] = useState("");
    const [typeLastname, setTypeLastname] = useState("");
    const [typeEmail, setTypeEmail] = useState("");
    const [typePass, setTypePass] = useState("");
    const [typePass2, setTypePass2] = useState("");

    const validRegister = () => {
        let flag = true;
        if (nameState !== "") {
            setTypeName("correct");
            flag &= true;
        } else {
            setTypeName("error");
            flag &= false;
        }

        if (lastnameState !== "") {
            setTypeLastname("correct");
            flag &= true;
        } else {
            setTypeLastname("error");
            flag &= false;
        }

        if (expEmail.test(emailState)) {
            setTypeEmail("correct");
            flag &= true;
        } else {
            setTypeEmail("error");
            flag &= false;
        }

        if (passState !== "" && pass2State !== "" && passState === pass2State) {
            setTypePass("correct");
            setTypePass2("correct");
            flag &= true;
        } else {
            setTypePass("error");
            setTypePass2("error");
            flag &= false;
        }
        if(flag){
            history.push('/taco-nochero/login')
        }
    };

    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid grid-col-1 md:grid-cols-2 w-full md:w-2/3">
                <div
                    className="w-full h-20 md:h-full rounded-lg"
                    style={{
                        background: `url(https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="bg-white p-5 rounded-lg">
                    <h1 className="h1-nochero my-4">Registrate</h1>

                    <div className="mx-5">
                        <TacoButton
                            bgColor="100"
                            Icon={() => <FcGoogle />}
                            moreClasses="font-medium"
                            callBack={() => {}}
                            text="Registrarse con Google"
                        />
                        <hr className="my-4" />

                        <label htmlhtmlFor="name">Nombre(s)</label>
                        <TacoInput
                            id="name"
                            placeholder="Ej. Manuel"
                            type="text"
                            data={nameState}
                            setData={setNameState}
                            state={typeName}
                            errorMessage="El nombre no debe estár vacío y ser inválido"
                        />

                        <label className="mt-4" htmlhtmlFor="lastName">Apellidos(s)</label>
                        <TacoInput
                            id="lastName"
                            placeholder="Ej. Pavóz"
                            type="text"
                            data={lastnameState}
                            setData={setLastnameState}
                            state={typeLastname}
                            errorMessage="Los apellidos no deben estár vacíos y ser inválidos"
                        />

                        <label htmlhtmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            placeholder="Ej. manuel@gmail.com"
                            type="email"
                            data={emailState}
                            setData={setEmailState}
                            state={typeEmail}
                            errorMessage="El nombre no debe estár vacío y ser inválido"
                        />
                        <label className="mt-4" htmlhtmlFor="pass">Contraseña:</label>
                        <TacoInput
                            id="pass"
                            type="password"
                            data={passState}
                            setData={setPassState}
                            state={typePass}
                            errorMessage="La contraseña no debe estár vacía"
                        />
                        
                        <label className="mt-4" htmlhtmlFor="pass2">Confirmar contraseña:</label>
                        <TacoInput
                            id="pass2"
                            type="password"
                            data={pass2State}
                            setData={setPass2State}
                            state={typePass2}
                            errorMessage="La contraseñas no coinciden"
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold mt-8"
                            callBack={validRegister}
                            text="Crear cuenta"
                        />
                        <p className="text-center my-3 text-gray-300 font-bold">
                            ó
                        </p>

                        <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            callBack={() => {
                                history.push("/taco-nochero/login");
                            }}
                            text="Iniciar sesión"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
