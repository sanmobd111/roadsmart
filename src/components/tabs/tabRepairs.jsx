import BannerInputs from "../Home/BannerInputs";


export default function TabRepairs() {
  const popularServices = [
    { name: "General Diagnosis", path: "/repair/addvehicle" },
    { name: "Tune up-scheduled maintenance", path: "/repair/addvehicle" },
    { name: "Brake pads", path: "/repair/addvehicle" },
    { name: "Check Engine Light", path: "/repair/addvehicle" },
    { name: "Oil Change", path: "/repair/addvehicle" },
    { name: "Transmission Flush", path: "/repair/addvehicle" },
    { name: "Popular Services", path: "/repair/addvehicle" },
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
