export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Shared dashboard navigation would go here */}
            <nav>Dashboard Navbar</nav>
            {children}
        </section>
    );
}
