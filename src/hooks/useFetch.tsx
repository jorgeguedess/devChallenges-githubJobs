import { useEffect, useRef, useState } from "react";

export type IJob = {
  find(arg0: (job: IJob) => boolean): IJob | null;
  filter(arg0: (companie: IJob) => boolean | undefined): IJob[];
  map(arg0: (item: IJob) => string): unknown;
  companyName: string;
  companyLogo: string;
  title: string;
  description: string;
  excerpt: string;
  pubDate: number;
  locationRestrictions: string[];
  guid: string;
  jobs?: any;
};

const useFetch = (
  url: RequestInfo | URL,
  limit?: number,
  offset?: number,
  options?: RequestInit
) => {
  const [data, setData] = useState<IJob | any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    setLoading(true);
    setData(null);

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(`${url}?limit=${limit}&offset=${offset}`, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = (await response.json()) as IJob;
        if (!signal.aborted) setData(json.jobs);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    void fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
