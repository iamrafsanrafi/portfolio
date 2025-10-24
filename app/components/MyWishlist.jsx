import Container from "./Container"
import SectionHeading from "./SectionHeading"

const MyWishlist = () => {
    return (
        <Container>
            <section id="wishlist" className="pt-[100px] pb-[150px] px-[25px]">
                {/* ---- Section Heading ---- */}
                <SectionHeading value="My Wishlist" />
            </section>
        </Container>
    )
}

export default MyWishlist