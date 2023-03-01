import { shared } from "@appblocks/node-sdk";

const handler = async (req, res) => {
  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }));
    res.end();
  }

  const { helper } = await shared.getShared();

  // Add your code here
  res.write(
    JSON.stringify({ success: true, msg: `Happy Hacking`, helper: helper() })
  );
  res.end();
};

export default handler;
