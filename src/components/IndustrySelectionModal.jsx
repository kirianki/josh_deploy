import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const IndustrySelectionModal = ({ isOpen, onClose, industries, onSelectIndustry }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose Your Industry</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => {
                  onSelectIndustry(industry.name);
                  onClose();
                }}
              >
                {industry.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IndustrySelectionModal;