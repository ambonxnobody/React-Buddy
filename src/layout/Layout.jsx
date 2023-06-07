import Topbar from "./Topbar"

/* eslint-disable react/prop-types */
const Layout = ({ children, topbarActive }) => {
    return (
        <>
            <Topbar topbarActive={topbarActive} />
            <main style={{ backgroundColor: "#F3F7F9" }}>
                {children}
            </main>
        </>
    )
}

export default Layout;