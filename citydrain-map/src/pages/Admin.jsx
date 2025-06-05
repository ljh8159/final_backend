import React from "react";

export default function Admin({ reports = [], onRefresh, onLogout }) {
  return (
    <div
      className="iphone-frame"
      style={{
        width: 393,
        height: 852,
        background: "#fff",
        borderRadius: 32,
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "32px 24px 80px 24px",
          overflowY: "auto",
          borderRadius: 32,
        }}
      >
        <h2 style={{ margin: "0 0 24px 0", fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>
          관리자 페이지
        </h2>
        <button
          type="button"
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#aab3ff",
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            marginBottom: 16,
          }}
          onClick={onRefresh}
        >
          새로고침
        </button>
        <div className="report-list">
          {reports.length === 0 ? (
            <div style={{ color: "#888", textAlign: "center", marginTop: 40 }}>
              신고/출동 내역이 없습니다.
            </div>
          ) : (
            reports.map((r, i) => (
              <div
                className="report-item"
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span
                  className="report-icon"
                  style={{
                    width: 36,
                    height: 36,
                    marginRight: 12,
                    fontSize: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {r.type === "출동" ? "🚓" : "🚧"}
                </span>
                <div className="report-info" style={{ flex: 1 }}>
                  <div className="report-status" style={{ fontWeight: "bold", fontSize: 16 }}>
                    {r.type} ({r.stage}단계)
                  </div>
                  <div className="report-address" style={{ fontSize: 13, color: "#888" }}>
                    {r.location}
                  </div>
                  <div className="report-time" style={{ fontSize: 13, color: "#888" }}>
                    {r.time}
                  </div>
                  <div className="report-user" style={{ fontSize: 13, color: "#aaa" }}>
                    {r.user}
                  </div>
                </div>
                {r.image && (
                  <img
                    src={r.image}
                    alt="신고이미지"
                    style={{
                      width: 48,
                      height: 48,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginLeft: 8,
                      border: "1px solid #eee",
                    }}
                  />
                )}
              </div>
            ))
          )}
        </div>
        <button
          type="button"
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#ededed",
            color: "#888",
            fontSize: 16,
            fontWeight: 500,
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            marginTop: 16,
          }}
          onClick={onLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}