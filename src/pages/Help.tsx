import ExploreMore from "../components/ExploreMore";

function Help() {
  return (
    <div>
      <div>
        <h1>Help Center</h1>
        <p>Hi, how can we help?</p>
      </div>
      <div className="rounded-full w-[300px] h-[50px] border border-[rgb(247,247,247)] bg-[rgb(247,247,247)]">
        <form action="">
          <input
            type="text"
            className="outline-none bg-[rgb(247,247,247)] font-bold text-black text-center pl-10 pt-2"
            placeholder="search help"
          />
        </form>
      </div>
      <div className="flex gap-3">
        <p>Guest</p>
        <p>Host</p>
        <p>Experience Host</p>
        <p>Travel admin</p>
      </div>
      <ExploreMore/>
    </div>
  );
}

export default Help;
