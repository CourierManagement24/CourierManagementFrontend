import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourierForm = () => {
  const [categories, setCategories] = useState([]);
  const courier_person = JSON.parse(sessionStorage.getItem("active-courier"));
  const courier_jwtToken = sessionStorage.getItem("courier-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const retrieveAllCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/helper/courier/type/fetch/all"
        );
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories!");
      }
    };

    retrieveAllCategories();
  }, []);

  const [courier, setCourier] = useState({
    courierName: "",
    customerRefId: "",
    courierUserId: courier_person?.id || "",
    street: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    receiverName: "",
    courierType: "",
    weight: "",
  });

  const handleInput = (e) => {
    setCourier({ ...courier, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!courier.courierName || !courier.customerRefId || !courier.receiverName || !courier.courierType) {
      toast.error("Please fill all required fields!");
      return false;
    }
    return true;
  };

  const saveCourier = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await fetch("http://localhost:8080/api/courier/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Bearer ${courier_jwtToken}`,
        },
        body: JSON.stringify(courier),
      });

      if (!response.ok) throw new Error("Server error");

      const res = await response.json();

      if (res.success) {
        toast.success(res.responseMessage, { autoClose: 1000 });
        setTimeout(() => navigate("/home"), 1000);
      } else {
        toast.error(res.responseMessage, { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error saving courier:", error);
      toast.error("It seems the server is down!");
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center mb-4">
        <div className="card form-card shadow-lg" style={{ width: "60rem" }}>
          <div className="container-fluid">
            <div className="card-header bg-color custom-bg-text mt-2 text-center" style={{ borderRadius: "1em", height: "45px" }}>
              <h5 className="card-title">Add Courier</h5>
            </div>
            <div className="card-body text-color">
              <form className="row g-3" onSubmit={saveCourier}>
                {/* Courier Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Courier Name</b></label>
                  <input type="text" className="form-control" name="courierName" onChange={handleInput} value={courier.courierName} required />
                </div>

                {/* Customer Reference Id */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Customer Reference Id</b></label>
                  <input type="text" className="form-control" name="customerRefId" onChange={handleInput} value={courier.customerRefId} required />
                </div>

                {/* Courier Category */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Courier Category</b></label>
                  <select name="courierType" className="form-control" onChange={handleInput} value={courier.courierType} required>
                    <option value="">Select Courier Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Receiver Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Receiver Name</b></label>
                  <input type="text" className="form-control" name="receiverName" onChange={handleInput} value={courier.receiverName} required />
                </div>

                {/* Weight */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Courier Weight (Kg)</b></label>
                  <input type="number" className="form-control" name="weight" onChange={handleInput} value={courier.weight} required />
                </div>

                {/* Address Inputs */}
                {["street", "landmark", "city", "pincode", "state", "country"].map((field) => (
                  <div key={field} className="col-md-6 mb-3">
                    <label className="form-label"><b>{field.charAt(0).toUpperCase() + field.slice(1)}</b></label>
                    <input type="text" className="form-control" name={field} onChange={handleInput} value={courier[field]} />
                  </div>
                ))}

                {/* Submit Button */}
                <div className="d-flex aligns-items-center justify-content-center mb-2">
                  <button type="submit" className="btn bg-color custom-bg-text">Add Customer Courier</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourierForm;
