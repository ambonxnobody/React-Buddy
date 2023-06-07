import Topbar from "./Topbar"

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <>
            <Topbar topbarActive={"artikel"} />
            <main style={{ backgroundColor: "#F3F7F9" }}>
                {children}
            </main>
        </>
    )
}

export default Layout;