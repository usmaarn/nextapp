
export default function page() {
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    console.log(ctx.req.cookies);

    return { props: {} }
}