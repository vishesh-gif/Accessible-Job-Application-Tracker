import DashboardBtn from "../../utils/DashboardBtn";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import RoleInfoSection from "./RoleInfoSection";
import ActionsSection from "./ActionsSection";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
    <div className="mb-3 bg-white px-3 sm:px-0">
      <DashboardBtn />

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-5 mt-3">
        <RoleInfoSection className="w-full lg:w-[70%]" data={data} />

        <ActionsSection
          documentId={id}
          applicationData={data}
          className="w-full lg:w-[30%]"
        />
      </section>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 my-4">
        <button
          onClick={() =>
            navigate("/editJobForm", {
              state: { jobData: data },
            })
          }
          className="flex items-center justify-center gap-2 text-sm sm:text-md font-semibold px-4 py-2 bg-[#e1e5f2] text-[#242f5b] rounded-md w-full sm:w-auto"
        >
          <FaPencilAlt />
          Edit Job
        </button>

        <button
          onClick={handleClick}
          className="flex items-center justify-center gap-2 text-sm sm:text-md font-semibold px-4 py-2 bg-[#e15b5f] text-white rounded-md w-full sm:w-auto"
        >
          <MdDelete />
          Delete Job
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
