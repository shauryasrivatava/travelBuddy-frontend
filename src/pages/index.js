const { default: HorizontalNavbar } = require("../../Components/Navbar/HorizonatalNavbar")
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'


export default function index() {
  return (
    <HorizontalNavbar />
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if(!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}
