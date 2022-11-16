import React, { useState } from "react";
import { Modal, Box, TextareaAutosize, Typography } from "@mui/material";
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import Layout from '../../../components/Layout'
import Image from 'next/image'
import Pill from '../../../components/Pill'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { PrismaClient } from "@prisma/client";
import Review from '../../../components/Review'
import ReviewModal from '../../../components/ReviewModal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const prisma = new PrismaClient();
export default function index({ game, review }: any) {

  const [reviewForm, setForm] = useState({
    gameID: game.data.appid,
    text: '',
    userId: "1"
  })
  const test = () => {
    console.log(game.data);

  }
  const handleInputChange = (event: any) => {
    setForm({
      ...reviewForm,
      [event.target.name]: event.target.value

    })
    console.log(reviewForm);


  }
  const postReview = async (event: any) => {
    event.preventDefault()
    const review: any = reviewForm;

    const response = await fetch('/api/Review/review', {
      method: 'POST',
      body: JSON.stringify({ review }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
    setOpen(false);

  }

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (

    <Layout>
      <div className="flex justify-center w-full ">
        <div className="w-10/12 flex flex-col justify-center gap-8">
          <div className=" w-full flex-row flex  ">
            <div className=" w-full  items-end flex-col flex justify-center ">
              <div className=" w-3/4 h-full mr-5 rounded-xl border border-white ">
                <Image
                  className="rounded-xl w-full "
                  src={game.data.header_image}
                  alt={game.data.header_image}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit='contain'
                />
              </div>
            </div>

            <div className=" w-3/5 flex flex-col  gap-4">
              <div className="ml-5 rounded-xl bg-white w-2/4 h-full">
                <div className="w-full text-black text-xl h-full flex items-center justify-center gap-2 flex-col">
                  <div className="flex h-1/5  w-full items-center justify-center">
                    <h3 className="flex ">{game.data.name}</h3>


                  </div>
                  <div className="bg-indigo-500 h-0.5 rounded-xl w-11/12"></div>
                  <div className="flex w-full h-56 text-xs px-2" id="style-3">
                    <p className='px-2 overflow-y-auto'>
                      {game.data.description}
                    </p>
                  </div>
                  <div className="w-full border-none h-1/4 flex justify-end items-end">
                    <button onClick={test} className="w-full border-none flex justify-center items-center h-8 text-sm  rounded-b-xl bg-gradient-to-r from-violet-600 via-purple-700 to-violet-500 background-animate text-black">{game.data.price != "0" ? `$ ${game.data.price} - Comprar` : 'Descargar'} </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-row gap-4 flex  h-2/4">
            <div className=" w-10/12 pl-4  items-end  flex-col flex ">
              <div className="w-3/4 gap-3 rounded-xl  h-auto shadow-2xl text-black bg-white flex-col flex">
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="w-3/4">
                    <h3 className="text-2xl text-center">Reseñas</h3>

                  </div>
                  <div className="w-1/4 flex justify-center">
                    <button className='h-8 w-8 items-center flex justify-center rounded-3xl border-none text-white bg-green-500' onClick={() => setOpen(true)}> <AiOutlinePlus /></button>

                  </div>

                </div>
                <div className="w-full  h-0.5 roundedn-xl bg-indigo-600 "></div>

                <div className="w-full flex items-center justify-center flex-col gap-3">
                  <div className='w-full'>

                    {review.map((review: any) => (
                      <div key={review.id} className="w-full">
                        <Review text={review.text}></Review>
                      </div>
                    ))}
                  </div>
                  {review.length == 0 &&
                    <h1>
                      No hay reseñas
                    </h1>}

                  <button className="border-none bg-transparent rounded-md text-white animate-bounce mt-4 items-center justify-center flex flex-col"><span>Ver más</span> <AiOutlineArrowDown /></button>
                </div>


              </div>
            </div>

            <div className=" w-8/12 pr-16 flex justify-start">
              <div className=" w-8/12 h-full   rounded-xl text-xl flex  items-center shadow-2xl text-black bg-white flex-col">
                <div className="mt-3 text-2xl">
                  <h3>
                    Categorias
                  </h3>
                </div>
                <div className="h-0.5 mt-4 bg-indigo-500 w-11/12"></div>
                <div className='h-full w-full flex flex-row gap-2 justify-center items-center'>

                  {game.data.genres.map((genre: any, index: number) => (

                    <Pill key={index} text={genre} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <div style={{ justifyContent: 'end', display: 'flex', width: '100%' }}>
            <button style={{ cursor: 'pointer', background: 'transparent', border: 'none' }} onClick={handleClose}><IoCloseOutline size={20} style={{ cursor: 'pointer', background: 'transparent', border: 'none' }} /></button>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reseña
          </Typography>
          <form onSubmit={postReview} style={{ width: '100%', height: '100%' }}>
            <Typography style={{ width: '100%', height: '70%' }} id="modal-modal-description" sx={{ mt: 2 }}>
              <TextareaAutosize
                onChange={handleInputChange}
                name="text"
                aria-label="empty textarea"
                placeholder="Reseña"
                style={{ width: '100%', height: '90%', resize: 'none' }}
              />
              <button type="submit" style={{ color: 'white', width: '100%', height: '5%', border: 'none', background: 'lightgreen' }}>Enviar</button>
            </Typography>
          </form>
        </Box>
      </Modal>
    </Layout >

  )
}



export const getServerSideProps = async (context: any) => {
  const id = context.query
  console.log(id);


  const review = await prisma.gameReview.findMany({
    where: {
      gameID: id.gameid
    },
  }

  );
  // const res = await fetch('https://cs-steam-game-api.herokuapp.com/single-game/:[id]')
  const res = await fetch(`https://cs-steam-game-api.herokuapp.com/single-game/${id.gameid}`)
  const game = await res.json()
  console.log(review);


  return {
    props: {
      review: review,
      game: game,
    }
  }
}
