import StatusBar from './statusBar'
 
export default function Layout({ children }) {
  return (
    <>
      <StatusBar fraction='1/4' />
      <main>{children}</main>
    </>
  )
}