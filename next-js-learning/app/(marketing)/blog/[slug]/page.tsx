export default function Page({params}:{slug:string}){
    return (
        <h1>Slug Page@{params.slug}</h1>
    )
}

// 命名页面地址