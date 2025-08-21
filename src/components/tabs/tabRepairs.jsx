import BannerInputs from "../Home/BannerInputs";


export default function TabRepairs() {
  const popularServices = [
    { name: "General Diagnosis", path: "/repair-service" },
    { name: "Tune up-scheduled maintenance", path: "/repair-service" },
    { name: "Brake pads", path: "/repair-service" },
    { name: "Check Engine Light", path: "/repair-service" },
    { name: "Oil Change", path: "/repair-service" },
    { name: "Transmission Flush", path: "/repair-service" },
    { name: "Popular Services", path: "/repair-service" },
    { name: "See All Repair Services", path: "/repair", isRedirect: true },
  ];


  return (
    <div>
      <div className="text-center py-9">
        <h3 className="md:text-[45px] text-[24px] font-extrabold text-black">
          Order car repair services on demand!
        </h3>
      </div>
      <BannerInputs defaultPath={"/repair"} serviceInputPlaceholder="Search Repair services" popularServices={popularServices} />
    </div>
  );
}
