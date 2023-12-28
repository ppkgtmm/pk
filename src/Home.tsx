// import { colors } from './styles'
// import avatar from './avatar.svg'
// import { LinkedinIcon, MediumIcon, GithubIcon, EnvelopeIcon } from './icons'
// import { Link } from 'react-router-dom'

// function Home() {
//   const fontColor = { color: colors.gray12 }
//   const subColor = { color: colors.gray11 }
//   const cardColor = { backgroundColor: colors.gray2 }
//   const tabColor = { backgroundColor: colors.gray3 }
//   return (
//     <div className="py-10 min-h-screen">
//       <div className="max-w-screen-lg mx-auto">
//         <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-y-4">
//           <div
//             className="rounded-lg overflow-hidden hover:scale-110 ease-in-out duration-300"
//             style={cardColor}
//           >
//             <div className="my-7 mx-4 flex items-center space-x-6">
//               <div className="w-24 h-24 bg-white rounded">
//                 <img className="object-cover" src={avatar} />
//               </div>
//               <div className="flex-1">
//                 <p className="font-semibold text-2xl" style={fontColor}>
//                   Pinky Gautam
//                 </p>
//                 <p style={subColor}>
//                   data engineer from development background
//                 </p>
//                 <p className="text-xl">💻 🎄 ☁️ ✨</p>
//               </div>
//             </div>
//             <div
//               className="p-4 grid grid-cols-4 text-white gap-x-3 gap-y-2 rounded-lg overflow-hidden"
//               style={tabColor}
//             >
//               <Link
//                 to={''}
//                 className="p-3 flex justify-center items-center rounded-lg transition hover:scale-90 ease-in-out duration-300 space-x-2.5 bg-black"
//               >
//                 <GithubIcon />
//                 {/* <p className="font-medium">ppkgtmm</p> */}
//               </Link>
//               <Link
//                 to={''}
//                 className="p-3 flex justify-center items-center rounded-lg transition hover:scale-90 ease-in-out duration-300 space-x-2.5"
//                 style={{ backgroundColor: colors.red9 }}
//               >
//                 <EnvelopeIcon />
//                 {/* <p className="font-medium">Send a mail</p> */}
//               </Link>
//               <Link
//                 to={''}
//                 className="p-3 flex justify-center items-center rounded-lg transition hover:scale-90 ease-in-out duration-300 space-x-2.5"
//                 style={{ backgroundColor: colors.blue9 }}
//               >
//                 <LinkedinIcon />
//                 {/* <p className="font-medium">Get connected</p> */}
//               </Link>
//               <Link
//                 to={''}
//                 className="p-3 flex justify-center items-center rounded-lg transition hover:scale-90 ease-in-out duration-300 space-x-2.5 bg-white text-black"
//               >
//                 <MediumIcon />
//                 {/* <p className="font-medium">Read some stuff</p> */}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
