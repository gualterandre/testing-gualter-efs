export default () => {
  console.log("edge function ran");
  return new Response("Hello world");
};

export const config = { path: "/" };
