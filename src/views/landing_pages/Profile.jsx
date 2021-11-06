import React from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";


export default function Profile() {
    return (
        <div className="w-full md:grid-cols-2 md:w-2/3 h-screen mx-auto flex  place-items-center text-black ">
            <div className="grid grid-col-1 md:grid-cols-2 w-full  md:w-2/3 ">
                <div
                    className="w-full h-20 md:h-full rounded-lg"
                    style={{
                        background: `url(https://i.imgur.com/n57ZYIj.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: '600px',
                        width: '300px',
                        opacity: 0.6,

                    }}
                >
                    <img class="w-32 h-32 rounded-full mx-auto  md:w-48 md:h-auto" 
                    style={{
                        background: `url(https://i.imgur.com/utQhcY5.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: '200px',
                        width: '200px',
                        marginTop: '30px',
                      
                    }}
                    >
                    </img>
                    <p className="h2-nochero flex justify-center">
                        Perfil
                    </p>
                </div>
                <div className="bg-white p-5 rounded-lg  "
                 style={{
                    height: '600px',
                    width: '600px', }}>
                    <h1 className="h1-nochero">Tus Datos</h1>
                 
                    <div className="mx-5">
                        
                        <hr className="my-4" />

                        <label htmlFor="name">Nombre(s)</label>
                        <TacoInput
                            id="name"
                            moreClasses="mb-4"
                            defaultValue="Pedrito"
                            type="text"
                            
                        />

                        <label htmlFor="lastName">Apellidos(s)</label>
                        <TacoInput
                            id="lastName"
                            moreClasses="mb-4"
                            placeholder="Ej. Pavóz"
                            type="text"
                        />

                        <label htmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            moreClasses="mb-4"
                            placeholder="Ej. manuel@gmail.com"
                            type="email"
                        />
                        <label htmlFor="pass">Contraseña:</label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses="mb-8"
                        />
                          <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Guardar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}