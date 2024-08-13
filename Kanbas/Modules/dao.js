import model from "./model.js";
export const findAllModules = () => model.find();
export const findModulesByCourse = (course) => model.find({ course: course });
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (mId, module) =>  model.updateOne({ _id: mId }, { $set: module });
export const deleteModule = (mId) => model.deleteOne({ _id: mId });

  export const createModule = (module) => {
    delete module._id
    return model.create(module);
  }
  