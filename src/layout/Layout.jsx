import Topbar from "./Topbar"

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Layout = ({ children }) => {
    return (
        <>
            <Topbar />
            <main style={{ backgroundColor: "#F3F7F9", height: "94vh" }}>
                {children}
            </main>
        </>
    )
}

export default Layout;