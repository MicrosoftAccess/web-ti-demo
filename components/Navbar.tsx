import { Modal } from "flowbite-react/lib/esm/components";
import { ReactFragment, useState } from "react";
import { Button } from "flowbite-react/lib/esm/components/Button";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
export default function Navbar() {
  const { data, status } = useSession();
  const [isVisible, setVisible] = useState(true)
  const [login, setLogin] = useState(false);
  console.log(data)

  useEffect(() => {
    if (status === "authenticated")
      setLogin(false)

    if (status === "unauthenticated")
      setLogin(true)

  }, [status])

  return (
    <>
      <div className="flex flex-row gap-6 background-animate bg-black justify-around py-2">

        <div className="justify-evenly h-full flex items-center gap-16">
          <a href="/">
            <button className="bg-black text-white w-20 h-10 rounded">Tienda</button>

          </a>
          <a href="/Library">
            <button className="bg-black text-white w-20 h-10 rounded">
              Biblioteca
            </button>
          </a>

        </div>
        <div className="flex h-full justify-center items-center">
          {login ? <Link href="/Login">
            <button className="bg-black  text-white w-20 h-10 rounded">Login</button></Link> : <button onClick={() => signOut()} className="bg-black  text-white w-20 h-10 rounded">Cerrar sesión</button>}
          <Link href={"/Store"}>
            <button onClick={() => setVisible(true)} className="bg-black  text-white w-20 h-10 rounded"><AiOutlineShoppingCart className="" size={20} /></button>
          </Link>
        </div>
      </div>
      {/* <Button onClick={() => setVisible(true)}>
        Toggle modal
      </Button> */}
      {/* <Modal
        show={isVisible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          Terms of Service
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button >
            I accept
          </Button>
          <Button
            color="gray"
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
