import HomeBackground from "../widgets/layout/home-background";
import MainNav from "../widgets/layout/main-nav";

function HomePage() {
  return (
    <div className="relative min-h-screen w-screen">
      <HomeBackground />
      <div className="flex flex-col p-8">
        <MainNav />
      </div>
    </div>
  );
}

export default HomePage;
