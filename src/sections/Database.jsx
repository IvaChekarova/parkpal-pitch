import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const entities = [
  {
    name: "users",
    fields: [
      { name: "id", type: "PK" },
      { name: "email", type: "" },
      { name: "role", type: "" },
    ],
  },
  {
    name: "reservations",
    fields: [
      { name: "id", type: "PK" },
      { name: "user_id", type: "FK" },
      { name: "spot_id", type: "FK" },
    ],
  },
  {
    name: "parking_spots",
    fields: [
      { name: "id", type: "PK" },
      { name: "location_id", type: "FK" },
      { name: "price", type: "" },
    ],
  },
  {
    name: "payments",
    fields: [
      { name: "id", type: "PK" },
      { name: "reservation_id", type: "FK" },
      { name: "amount", type: "" },
    ],
  },
];

function EntityBox({ name, fields }) {
  return (
    <div className="w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:w-48 sm:max-w-none sm:rounded-2xl">
      <div className="bg-gradient-to-r from-primary to-primary-dark px-3 py-1 text-center font-mono text-xs font-bold text-white sm:py-1.5 sm:text-sm">
        {name}
      </div>
      <ul className="divide-y divide-slate-100 px-3 py-0.5 sm:py-1">
        {fields.map(({ name: f, type }, i) => (
          <li
            key={f}
            className={`items-center justify-between gap-2 py-0.5 font-mono text-[10px] text-slate-600 sm:flex sm:py-1 sm:text-xs ${
              i < 2 ? "flex" : "hidden sm:flex"
            }`}
          >
            <span className={type === "PK" ? "font-bold text-primary" : ""}>{f}</span>
            {type && <span className="text-[9px] uppercase text-slate-400 sm:text-[10px]">{type}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Database() {
  return (
    <SlideShell id="database" theme="light">
      <SectionHeading
        eyebrow="07 · База на податоци"
        title="Релационен модел зад платформата"
        subtitle="Главните ентитети и врските помеѓу корисниците, паркинзите, резервациите и плаќањата."
      />

      <Reveal direction="up" delay={0.1}>
        {/* Mobile: simple vertical stack */}
        <div className="mt-4 flex flex-col items-center gap-1.5 sm:hidden">
          <EntityBox {...entities[0]} />
          <ArrowDown className="shrink-0 text-slate-300" size={14} />
          <EntityBox {...entities[1]} />
          <ArrowDown className="shrink-0 text-slate-300" size={14} />
          <EntityBox {...entities[2]} />
          <ArrowDown className="shrink-0 text-slate-300" size={14} />
          <EntityBox {...entities[3]} />
        </div>

        {/* Desktop: reservations as the central hub, connected to users, parking_spots and payments */}
        <div className="mx-auto mt-10 hidden w-fit grid-cols-[12rem_2.5rem_12rem_2.5rem_12rem] grid-rows-[auto_2.5rem_auto] items-center justify-center sm:grid">
          <div className="col-start-3 row-start-1 flex justify-center">
            <EntityBox {...entities[0]} />
          </div>

          <div className="col-start-3 row-start-2 flex justify-center">
            <ArrowDown className="text-slate-300" size={22} />
          </div>

          <div className="col-start-1 row-start-3 flex justify-center">
            <EntityBox {...entities[2]} />
          </div>
          <div className="col-start-2 row-start-3 flex justify-center">
            <ArrowRight className="text-slate-300" size={22} />
          </div>
          <div className="col-start-3 row-start-3 flex justify-center">
            <EntityBox {...entities[1]} />
          </div>
          <div className="col-start-4 row-start-3 flex justify-center">
            <ArrowRight className="text-slate-300" size={22} />
          </div>
          <div className="col-start-5 row-start-3 flex justify-center">
            <EntityBox {...entities[3]} />
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}
