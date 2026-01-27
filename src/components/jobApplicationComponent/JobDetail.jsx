import DashboardBtn from "../../utils/DashboardBtn";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import RoleInfoSection from "./RoleInfoSection";
import ActionsSection from "./ActionsSection";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import applicationService from "../../appwrite/application";
import { deleteApplication } from "../../Redux/applicationSlice";
import toast from "react-hot-toast";
const JobDetail = () => {
  const dispatch = useDispatch();
  const dataArray = useSelector((state) => state?.addApplication?.application);
  const { id } = useParams();
  const data = dataArray.find((arr) => arr.$id == id);
  const navigate = useNavigate();
  const handleDeleteApplication = async (id) => {
    try {
      const response = await applicationService.deleteApplication(id);
      if (response) {
        dispatch(deleteApplication(id));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClick = () => {
    handleDeleteApplication(id);
  };

  return (
    <div className="mb-3 bg-white">
      <DashboardBtn />
      <section className="flex gap-5  mt-2 ">
        <RoleInfoSection className={"w-[70%]"} data={data} />

        <ActionsSection className={"w-[30%]"} />
      </section>
      <div className="flex justify-between my-4 bg-white">
        <button className="flex items-center gap-2 text-md font-semibold px-3 py-2 bg-[#e1e5f2] text-[#242f5b] rounded-md">
          <span>
            <FaPencilAlt />
          </span>{" "}
          Edit Job
        </button>
        <button
          onClick={() => handleClick()}
          className="flex items-center gap-2 text-md font-semibold px-3 py-2 bg-[#e15b5f] text-white rounded-md"
        >
          <span>
            <MdDelete />{" "}
          </span>{" "}
          Delete Job
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
