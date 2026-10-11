import assert from "node:assert";
import fs from "node:fs";

const raw = fs.readFileSync(new URL("../portfolio-data.json", import.meta.url), "utf-8");
const data = JSON.parse(raw);

assert.strictEqual(data.profile.fullName, "Rizal Akbar Syah Fauzan Putra");
assert.strictEqual(data.profile.handle, "RizalSwikey");
assert.strictEqual(data.profile.links.linkedin, "https://www.linkedin.com/in/rizal-akbar-s-f-707a01219/");
assert.strictEqual(data.profile.links.email, "mailto:rizalakbarsyah@gmail.com");
assert.strictEqual(data.profile.location.coordinates.lat, -7.9666);
assert.strictEqual(data.profile.location.coordinates.lng, 112.6326);
assert.strictEqual(data.projects.length, 3);

const projectIds = data.projects.map((p) => p.id);
assert.deepStrictEqual(projectIds, ["kaca-putih", "initia-mate", "umkm-accounting"]);

const expCompanies = data.experienceHistory.map((e) => e.company);
assert.ok(expCompanies.some((c) => c.includes("Diskominfo")));
assert.ok(expCompanies.some((c) => c.includes("Perempuan Masa Depan")));

console.log("PASS: Portfolio data contract verified.");
