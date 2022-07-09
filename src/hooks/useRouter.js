import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const gotoHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const gotoSeries = useCallback(() => {
    navigate("/series");
  }, [navigate]);
  const gotoMovies = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  return {
    back,

    gotoHome,
    gotoSeries,
    gotoMovies,
  };
};
