import { axiosInstance } from "../service/axios";

const whitApi = (WrappedComponent, defaulMethod = "get", url) => {
  const CallApi = (props) => {
    const getApi = async (
      method = defaulMethod,
      urlOverride = url,
      data = null
    ) => {
      try {
        const response = await axiosInstance({
          method,
          url: urlOverride,
          data,
        });
        return response; // jangan lupa untuk mengembalikan data response agar bisa di ambil pada component lain
      } catch (err) {
        console.log(err);
      }
    };

    return <WrappedComponent {...props} getApi={getApi} />;
  };
  CallApi.displayName = `CallApi(${getDisplayName(WrappedComponent)})`;
  return CallApi;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
export { whitApi };
