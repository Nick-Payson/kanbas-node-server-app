import * as dao from "./dao.js";
import { findCourseById } from "../Courses/dao.js";


export default function ModuleRoutes(app) {

  const findAllModules = async (req, res) => {
    const course = await findCourseById(req.params.courseId);
    const modules = await dao.findModulesByCourse(course._id);
    res.json(modules);
};


  const createModule = async (req, res) => {
    const module = await dao.createModule({ ...req.body, course: req.params.courseId});
    res.json(module);
};

  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.moduleId, req.body);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };

  const findModuleById = async (req, res) => {const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
 };

  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findAllModules);
  app.get("/api/modules/:moduleId", findModuleById);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);

  /*app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.json(modules);
  });
  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.modules.push(newModule);
    res.send(newModule);
  });
  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });
  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });*/



}
