import Loading from "@/app/loading";

export default function DashboardLayout ( {children} : {children: React.ReactNode}) {
    
    setTimeout(()=> {
        console.log("DashboardLayout timeout")
    }, 7000)
    
    return (
        <section>
            DashboardLayout
            {children}
        </section>
    )
} 