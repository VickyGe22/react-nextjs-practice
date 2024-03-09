export default function Page({params}:{params: {slug:string}}){
    return (
        <h1>Catch-all Slug Page@{params.slug}</h1>
    )
}
