"use client";
import { SyncLoader } from "react-spinners";

export default function Loading({ loading }) {
  if (!loading) return null; // Không hiển thị gì nếu không có trạng thái loading

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <SyncLoader color="#3bb77e" size={15} />
    </div>
  );
}
