import { Buffer } from "buffer";

export interface ISubscribe {
  name: string;
  url: string;
}

export async function getSubscribe() {
  const res = await fetch(process.env.SUBSCRIBE_URL!, {
    next: { revalidate: 60 },
  });
  const str = await res.text();
  const decodedData = Buffer.from(str, "base64");
  const listText = decodedData.toString("utf-8");
  console.log(listText);
  const rows: ISubscribe[] = [];
  listText.split("\r\n").forEach((url) => {
    const name = getTypeFromUrl(url);
    if (
      url !== "" &&
      name.indexOf("剩余") < 0 &&
      name.indexOf("套餐") < 0 &&
      name.indexOf("距离") < 0 &&
      name.indexOf("Expire Date") < 0 &&
      name.indexOf("GB") < 0
    ) {
      rows.push({
        url,
        name,
      });
    }
  });
  console.log(rows);
  return rows;
}

function getTypeFromUrl(url: string): string {
  // 解码整个URL
  const decodedURL = decodeURIComponent(url);
  console.log(decodedURL);
  const decoded = decodedURL.split("#");
  return decoded.length === 2 ? decoded[1] : "";
}
